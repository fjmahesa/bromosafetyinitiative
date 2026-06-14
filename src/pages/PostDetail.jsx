import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaCalendarAlt, FaClock, FaFacebook, FaWhatsapp, FaInstagram,
  FaTiktok, FaCopy, FaCheck, FaFolderOpen, FaCommentAlt, FaPaperPlane
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function PostDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [wpCategories, setWpCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  // STATE BARU: Untuk Fitur Komentar
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [commentStatusMsg, setCommentStatusMsg] = useState({ type: '', text: '' });

  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';
  const currentUrl = window.location.href;

  // EFFECT 1: Mengambil Data Artikel Utama
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setPost(null);
    setIsLoading(true);
    setCommentStatusMsg({ type: '', text: '' });

    const langActive = i18n.language && i18n.language.startsWith('en') ? 'en' : 'id';

    fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/posts?_embed&slug=${slug}`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat artikel');
        return res.json();
      })
      .then((postsData) => {
        if (postsData && postsData.length > 0) {
          const mainPost = postsData[0];
          const targetSlug = mainPost.translations?.[langActive];

          if (targetSlug && targetSlug !== slug) {
            navigate(`/post/${targetSlug}`, { replace: true });
            return;
          }

          setPost(mainPost);

          const fetchAllCategories = fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/categories?lang=${langActive}`, { signal }).then(res => res.json());
          const fetchRecent = fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/posts?_embed&per_page=4&exclude=${mainPost.id}&lang=${langActive}`, { signal }).then(res => res.json());

          return Promise.all([fetchAllCategories, fetchRecent]);
        } else {
          setIsLoading(false);
          return null;
        }
      })
      .then((results) => {
        if (results) {
          const [catsData, recentData] = results;
          const cleanCats = catsData.filter(cat => cat.slug !== 'uncategorized');
          setWpCategories(cleanCats);
          setRecentPosts(recentData);
          setIsLoading(false);
          window.scrollTo(0, 0);
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error memuat data:', err);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [slug, i18n.language, navigate]);

  // EFFECT 2: Mengambil Daftar Komentar Terkait (Hanya berjalan jika data post sudah ada)
  useEffect(() => {
    if (!post) return;

    // Ambil komentar yang berstatus approved (disetujui) untuk ID post ini
    fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/comments?post=${post.id}&status=approve`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error("Gagal memuat komentar:", err));
  }, [post]);

  // FUNGSI BARU: Kirim Komentar ke WordPress API
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentName || !commentEmail || !commentContent) {
      setCommentStatusMsg({ type: 'error', text: 'Semua bidang wajib diisi!' });
      return;
    }

    setIsSubmittingComment(true);
    setCommentStatusMsg({ type: '', text: '' });

    fetch(`https://admin.bromosafetyinitiative.com/wp-json/wp/v2/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: post.id,
        author_name: commentName,
        author_email: commentEmail,
        content: commentContent,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengirim komentar');
        return res.json();
      })
      .then((data) => {
        setIsSubmittingComment(false);
        setCommentContent(''); // Kosongkan form teks saja

        // Beri tahu user bahwa komentar masuk ke tahap moderasi admin
        setCommentStatusMsg({
          type: 'success',
          text: currentLang === 'id'
            ? 'Komentar Anda berhasil dikirim dan menunggu moderasi admin!'
            : 'Your comment has been submitted and is awaiting moderation!'
        });
      })
      .catch((err) => {
        console.error(err);
        setIsSubmittingComment(false);
        setCommentStatusMsg({ type: 'error', text: 'Terjadi kesalahan, coba lagi nanti.' });
      });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error('Gagal menyalin tautan:', err));
  };

  const calculateReadingTime = (htmlContent) => {
    if (!htmlContent) return 1;
    const cleanText = htmlContent.replace(/<[^>]*>/g, '');
    const wordCount = cleanText.trim().split(/\s+/).filter(word => word.length > 0).length;
    const minutes = Math.ceil(wordCount / 200);
    return minutes < 1 ? 1 : minutes;
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-pulse space-y-8 page-enter">
        <div className="h-12 bg-slate-200 rounded-xl w-3/4" />
        <div className="aspect-[16/7] bg-slate-200 rounded-3xl w-full" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-32 font-black text-slate-400 uppercase tracking-widest text-sm page-enter">
        {t('postNotFound')}
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=1200';
  const formattedDate = new Date(post.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const articleTitle = post.title.rendered;
  const activeCategory = wpCategories.find(cat => post.categories.includes(cat.id));
  const readingTime = calculateReadingTime(post.content.rendered);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-10 page-enter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

        {/* KOLOM 1: KATEGORI (STICKY LEFT) */}
        <aside className="hidden lg:block lg:col-span-2 lg:sticky lg:top-28 bg-white border border-slate-200/60 rounded-3xl p-4 shadow-xs">
          <h3 className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4 pb-2 border-b border-slate-100 flex items-center gap-1.5">
            <FaFolderOpen /> {t('postCategory')}
          </h3>
          <nav className="flex flex-col gap-2.5">
            {wpCategories.map((cat) => {
              const isCurrentCategory = post.categories.includes(cat.id);
              return (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className={`text-xs font-bold tracking-wide transition-all rounded-xl px-3 py-2 block capitalize group/cat ${isCurrentCategory
                    ? 'bg-[var(--color-brand-orange-light)] text-[var(--color-brand-orange)] border border-[var(--color-brand-orange-border)]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="truncate">{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${isCurrentCategory ? 'bg-[var(--color-brand-orange)] text-white' : 'bg-slate-100 text-slate-400 group-hover/cat:bg-slate-200'
                      }`}>
                      {cat.count}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* KOLOM 2: MAIN ARTIKEL CONTENT */}
        <article className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-5 sm:p-10 shadow-xs">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-5 select-none">
            <Link to="/" className="hover:text-slate-600 transition-colors">{t('postBreadcrumbHome')}</Link>
            <span className="text-slate-300 font-normal">&gt;</span>
            <Link to="/articles" className="hover:text-slate-600 transition-colors">{t('postBreadcrumbArticles')}</Link>
            <span className="text-slate-300 font-normal">&gt;</span>
            {activeCategory ? (
              <Link to={`/category/${activeCategory.slug}`} className="text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] transition-colors capitalize font-extrabold">{activeCategory.name}</Link>
            ) : (
              <span className="capitalize">{t('postBreadcrumbGeneral')}</span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight mb-6" dangerouslySetInnerHTML={{ __html: articleTitle }} />

          {/* METADATA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-8 text-xs font-bold text-slate-400 tracking-wide">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-orange)] text-white text-[9px] flex items-center justify-center font-black">BSI</div>
                <span className="text-slate-700 font-extrabold">{t('postAuthor')}</span>
              </div>
              <span className="text-slate-300 font-normal">—</span>
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-slate-300 text-[11px]" />
                <span className="text-slate-500">{formattedDate}</span>
              </div>
              <span className="text-slate-300 font-normal">{t('postIn')}</span>
              <div className="inline-flex items-center">
                {activeCategory ? (
                  <Link to={`/category/${activeCategory.slug}`} className="text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] transition-colors font-black capitalize bg-[var(--color-brand-orange-light)] px-2 py-0.5 rounded-md border border-[var(--color-brand-orange-border)]">{activeCategory.name}</Link>
                ) : (
                  <span className="text-slate-500 font-black capitalize bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">{t('postBreadcrumbGeneral')}</span>
                )}
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-slate-500 font-extrabold bg-slate-50/80 px-2.5 py-1 rounded-lg border border-slate-100 whitespace-nowrap self-start sm:self-auto">
              <FaClock className="text-slate-400 text-[11px]" /> {readingTime} {t('postMinsRead')}
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 mb-10">
            <img src={featuredImage} alt={articleTitle} className="w-full h-full object-cover" />
          </div>

          {/* BODY */}
          <div className="prose prose-slate max-w-none prose-p:text-base prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight prose-headings:mt-8 prose-headings:mb-4 prose-h2:text-xl prose-h2:sm:text-2xl prose-strong:font-black prose-strong:text-slate-900 prose-img:rounded-2xl prose-img:shadow-md prose-a:text-[var(--color-brand-orange)] prose-a:font-bold hover:prose-a:text-[var(--color-brand-orange-hover)] mb-12" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

          {/* SOSIAL MEDIA SHARE */}
          <div className="border-t border-slate-100 pt-8 mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-800">{t('postShareTitle')}</h4>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{t('postShareDesc')}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={t('postShareFacebook')}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1877F2] hover:bg-[#166FE5] hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="text-lg" />
              </a>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' - ' + currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={t('postShareWhatsApp')}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#25D366] hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title={t('postShareInstagram')}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#E1306C] hover:bg-[#c2255c] hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                title={t('postShareTikTok')}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#000000] hover:bg-[#1a1a1a] hover:scale-110 transition-all duration-300"
              >
                <FaTiktok className="text-sm" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={t('postShareX')}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#000000] hover:bg-[#1a1a1a] hover:scale-110 transition-all duration-300"
              >
                <FaXTwitter className="text-sm" />
              </a>

              <button
                onClick={handleCopyLink}
                title={t('postShareCopy')}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer select-none hover:scale-110 shadow-md
                  ${isCopied ? 'bg-emerald-500' : 'bg-slate-500 hover:bg-slate-600'}
                `}
              >
                {isCopied ? <FaCheck className="text-sm" /> : <FaCopy className="text-sm" />}
              </button>
            </div>
          </div>

          {/* =================================================================================== */}
          {/* SEKSI BARU: SISTEM KOMENTAR HEADLESS WORDPRESS */}
          {/* =================================================================================== */}
          <div className="border-t border-slate-100 pt-10 mt-12 space-y-8">
            <h3 className="text-lg font-black tracking-tight text-slate-900 uppercase flex items-center gap-2">
              <FaCommentAlt className="text-[var(--color-brand-orange)] text-sm" />
              {currentLang === 'id' ? `Komentar (${comments.length})` : `Comments (${comments.length})`}
            </h3>

            {/* DAFTAR LIST KOMENTAR */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
              {comments.length === 0 ? (
                <p className="text-xs text-slate-400 font-medium italic py-2">
                  {currentLang === 'id' ? 'Belum ada komentar. Jadilah yang pertama memberikan tanggapan!' : 'No comments yet. Be the first to leave a thought!'}
                </p>
              ) : (
                comments.map((comment) => {
                  const commentDate = new Date(comment.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  });

                  const commentTime = new Date(comment.date).toLocaleTimeString(currentLang === 'id' ? 'id-ID' : 'en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: currentLang !== 'id' // Menggunakan format AM/PM khusus untuk bahasa Inggris
                  });
                  return(
                    <div key={comment.id} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1.5 animate-fade-in-quick">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-slate-800 capitalize">{comment.author_name}</span>
                        {/* TAMPILAN BARU: Tanggal, Jam:Menit */}
                        <span className="text-[10px] font-bold text-slate-400">
                          {commentDate}, {commentTime}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                    </div>
                  );
                })
              )}
            </div>

            {/* FORMULIR MEMBUAT KOMENTAR BARU */}
            <form onSubmit={handleSubmitComment} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-5 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                {currentLang === 'id' ? 'Tinggalkan Komentar' : 'Leave a Comment'}
              </h4>

              {commentStatusMsg.text && (
                <div className={`p-3 rounded-xl text-xs font-bold border ${commentStatusMsg.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-rose-50 border-rose-200 text-rose-700'}`}>
                  {commentStatusMsg.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder={currentLang === 'id' ? 'Nama Anda *' : 'Your Name *'}
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[var(--color-brand-orange)]"
                  required
                />
                <input
                  type="email"
                  placeholder={currentLang === 'id' ? 'Email Anda (Tidak dipublikasikan) *' : 'Your Email (Will not be published) *'}
                  value={commentEmail}
                  onChange={(e) => setCommentEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[var(--color-brand-orange)]"
                  required
                />
              </div>

              <textarea
                rows="4"
                placeholder={currentLang === 'id' ? 'Tulis komentar Anda di sini... *' : 'Write your comment here... *'}
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[var(--color-brand-orange)] resize-none"
                required
              />

              <button
                type="submit"
                disabled={isSubmittingComment}
                className="inline-flex items-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer select-none disabled:opacity-50"
              >
                {isSubmittingComment
                  ? (currentLang === 'id' ? 'Mengirim...' : 'Sending...')
                  : (<><FaPaperPlane /> {currentLang === 'id' ? 'Kirim Komentar' : 'Post Comment'}</>)}
              </button>
            </form>
          </div>
          {/* =================================================================================== */}

        </article>

        {/* KOLOM 3: SIDEBAR REKOMENDASI */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-8">
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-black tracking-wider text-slate-900 uppercase mb-6 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>{t('postOtherArticles')}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]" />
            </h3>
            <div className="flex flex-col gap-5">
              {recentPosts.map((recent) => {
                const recentImg = recent._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1605540435647-88d707f7f4a2?w=150';
                const recentDate = new Date(recent.date).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                return (
                  <Link key={recent.id} to={`/post/${recent.slug}`} className="flex gap-4 items-start group select-none cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100 shadow-xs">
                      <img src={recentImg} alt={recent.title.rendered} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{recentDate}</span>
                      <h4 className="text-sm font-extrabold text-slate-800 group-hover:text-[var(--color-brand-orange)] transition-colors leading-snug line-clamp-3" dangerouslySetInnerHTML={{ __html: recent.title.rendered }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden border border-slate-800">
            <h4 className="text-base font-black tracking-tight mb-2">{t('postCtaTitle')}</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">{t('postCtaDesc')}</p>
            <a href="tel:112" className="inline-flex w-full justify-center items-center text-center bg-[var(--color-brand-orange)] text-white text-xs font-extrabold tracking-widest uppercase py-3 rounded-xl shadow-md">{t('postCtaBtn')}</a>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default PostDetail;