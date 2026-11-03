
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [activePage, setActivePage] = useState("memory");
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicNotice, setMusicNotice] = useState("");
  const audioRef = useRef(null);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setMusicNotice("");
    } catch {
      setIsPlaying(false);
      setMusicNotice("Tap play to enjoy the music ♡");
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await startMusic();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Browsers may block autoplay until the visitor interacts.
    startMusic();
  }, []);

  const noteLines = [
    "I know someone who is someone of mine.",
    "Who is not flawless but he is perfect.",
    "He is someone of mine with a very pure heart.",
    "He is someone who has a very gentle gesture,",
    "a heart warming etiquette with very own feelings.",
    "I know someone who is someone of mine.",
    "Who wants to change everything in the cosmos for me.",
    "Who wants to make the world like a candy.",
    "Who has a fear of losing me.",
    "I know someone who is someone of someone to me."
  ];

  const openDiary = () => {
    setOpened(true);
    setActivePage("memory");
    startMusic();
  };

  return (
    <div className="romantic-page">

      {/* Background music */}
      <audio
        ref={audioRef}
        src="/dandelions.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Background lights */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="glow glow-three"></div>

      {/* Floating hearts */}
      <div className="floating-container">
        {Array.from({ length: 35 }, (_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${(i * 37) % 100}%`,
              animationDelay: `${(i * 1.7) % 12}s`,
              animationDuration: `${8 + (i % 7)}s`
            }}
          >
            {i % 3 === 0 ? "♥" : "♡"}
          </span>
        ))}
      </div>

      <main className="main-content">

        {!opened ? (

          /* Welcome screen */
          <section className="welcome">

            <div className="top-heart">♡</div>

            <p className="small-heading">
              A LITTLE SURPRISE MADE WITH LOVE
            </p>

            <h1 className="welcome-title">My Dear Aamba</h1>

            <p className="welcome-text">
              Sometimes, one little thing can mean
              more than a thousand words.
            </p>

            <p className="welcome-text">
              And sometimes, someone becomes
              the most beautiful part of our thoughts.
            </p>

            {/* Animated diary cover */}
            <div className="diary-container">
              <div className="diary-book">
                <div className="diary-spine"></div>

                <div className="diary-cover">
                  <div className="cover-decoration">✧</div>
                  <div className="cover-title">A Little Memory</div>
                  <div className="cover-heart">♡</div>
                  <div className="cover-subtitle">
                    Especially for Aamba
                  </div>
                </div>
              </div>
            </div>

            <button className="open-button" onClick={openDiary}>
              Open your little surprise 💌
            </button>

            <p className="bottom-hint">
              A little diary memory, a special photograph,
              and lots of feelings.
            </p>

            <div className="welcome-footer">
              Made with love and a little courage. ❤️
            </div>

          </section>

        ) : (

          /* Opened diary experience */
          <section className="memory-screen">

            <nav className="love-page-nav" aria-label="Website pages">

              <button
                className={
                  activePage === "memory"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => {
                  setActivePage("memory");
                  startMusic();
                }}
              >
                Our Memory ♡
              </button>

              <button
                className={
                  activePage === "feelings"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => {
                  setActivePage("feelings");
                  startMusic();
                }}
              >
                My True Feelings 💌
              </button>

            </nav>

            {activePage === "feelings" ? (

              /* My True Feelings page */
              <section className="true-feelings-page">

                <div className="opened-heart">♡</div>

                <p className="small-heading">
                  A FEW WORDS, STRAIGHT FROM MY HEART
                </p>

                <h1 className="memory-title">
                  My True Feelings
                </h1>

                <p className="feelings-intro">
                  Aamba, there is something I want you
                  to understand — gently, honestly,
                  and without any pressure.
                </p>

                <article className="feelings-letter">

                  <p>
                    Sometimes I wonder whether the love and care
                    I try to show you might feel unreal.
                    Maybe it seems too good to be true, like a
                    beautiful dream you are unsure whether to
                    believe. And perhaps, at times, it may even
                    feel confusing or overwhelming.
                  </p>

                  <p>
                    I cannot ask you to believe every word I say
                    just because I have written it here.
                    I only want you to know that these feelings
                    are not an act, a game, or a passing attempt
                    to impress you. They come from a sincere
                    place in my heart.
                  </p>

                  <p>
                    What I feel for you is genuine. It is in
                    the way I remember little things, value
                    our conversations, smile at the thought
                    of you, and feel grateful for the moments
                    we get to share. I may not always find
                    the perfect words, and I may not express
                    everything perfectly, but that does not
                    make what I feel any less real.
                  </p>

                  <p>
                    I don't expect you to feel the same way,
                    to give me an answer, or to trust me
                    overnight. You deserve the time and space
                    to understand your own feelings. I will
                    respect your comfort and your boundaries,
                    because something pure should never
                    need pressure to prove itself.
                  </p>

                  <p>
                    I hope that, with time, my actions will
                    speak more clearly than this little note.
                    I want my kindness to be consistent,
                    my words to be honest, and my presence
                    to bring you peace rather than confusion.
                    Whether you see it today or much later,
                    please know that I meant every feeling
                    I shared with you.
                  </p>

                  <p className="feelings-highlight">
                    This isn't a dream I am asking you
                    to believe blindly. It's simply the truth
                    of what I feel — honest, gentle,
                    and from the heart. ❤️
                  </p>

                  <div className="feelings-signoff">
                    Forever yours,
                    <br />
                    <strong>From your Bawra. ❤️</strong>
                  </div>

                </article>

                <button
                  className="open-button back-to-memory"
                  onClick={() => setActivePage("memory")}
                >
                  Back to our memories ♡
                </button>

              </section>

            ) : (

              /* Original memory page */
              <>

                <div className="opened-heart">❤️</div>

                <p className="small-heading">
                  A MEMORY I WANT TO KEEP FOREVER
                </p>

                <h1 className="memory-title">
                  A Little Piece of You
                </h1>

                <p className="memory-intro">
                  This is not just a picture for me.
                  It is something that makes me smile.
                </p>

                {/* Typed diary note */}
                <div className="typed-note">

                  <div className="typed-note-date">
                    01 / 11 / 2026
                  </div>

                  <h2>Someone of Mine</h2>

                  <div className="typed-note-lines">

                    {noteLines.map((line, index) => (
                      <p
                        key={index}
                        style={{
                          animationDelay: `${index * 0.45}s`
                        }}
                      >
                        {line}
                      </p>
                    ))}

                  </div>

                  <div className="typed-note-signature">
                    – S.A.
                  </div>

                </div>

                {/* First personal message */}
                <section className="love-message">

                  <div className="message-heart">💗</div>

                  <p className="small-heading">
                    SOMETHING I WANT YOU TO KNOW
                  </p>

                  <h2>Aamba, this is special to me...</h2>

                  <div className="message-text">

                    <p>
                      You know, I don't think you realize
                      how much this little note means to me.
                    </p>

                    <p>
                      Maybe for you, it was just a page
                      from your diary, a few thoughts
                      written in your own beautiful way.
                      But for me, it became something
                      I want to treasure.
                    </p>

                    <p>
                      I have read your words again and again.
                      Every time, they bring a different
                      kind of happiness to my heart.
                    </p>

                    <p>
                      I genuinely love this note.
                      Not just because of what you wrote,
                      but because it came from you.
                    </p>

                    <p className="highlight-line">
                      Your handwriting, your thoughts,
                      your little expressions...
                      I wish I could keep this moment
                      safe forever.
                    </p>

                  </div>

                </section>

                {/* Website-making message */}
                <section className="surprise-message">

                  <div className="sparkle">✧</div>

                  <p className="small-heading">
                    A LITTLE SOMETHING FROM ME
                  </p>

                  <h2>I made this for you...</h2>

                  <div className="surprise-text">

                    <p>
                      I made this little world for you
                      with lots of love and a little courage.
                    </p>

                    <p>
                      Maybe I am not always good at
                      expressing everything I feel,
                      and maybe some things are easier
                      to create than to say.
                    </p>

                    <p>
                      So I thought, why not turn a
                      beautiful memory into something
                      that belongs to just us?
                    </p>

                    <p>
                      Every little detail here has a
                      feeling behind it. The colours,
                      the words...
                      I wanted all of it to remind you
                      how special you are to me.
                    </p>

                    <p className="highlight-line">
                      I don't know how to make the entire
                      universe smile, but I hope this
                      little corner of it brings a smile
                      to your face.
                    </p>

                  </div>

                  <div className="message-divider">♡ ✧ ♡</div>

                  <h3>One thing I want you to remember...</h3>

                  <p className="final-romantic-line">
                    You don't have to change the cosmos
                    to make my world beautiful, Aamba.
                    Sometimes, just knowing that you exist
                    is enough to make an ordinary day
                    feel extraordinary.
                  </p>

                </section>

                {/* Original handwritten diary photo */}
                <section className="photo-section">

                  <p className="small-heading">
                    THE MEMORY THAT STARTED IT ALL
                  </p>

                  <h2 className="photo-heading">
                    A Page Close to My Heart
                  </h2>

                  <p className="photo-intro">
                    A little piece of your diary that became
                    a beautiful memory for me.
                  </p>

                  <div className="photo-frame">

                    <div className="photo-top">
                      A LITTLE MEMORY ♡
                    </div>

                    <img
                      src="/diary-note.jpeg"
                      alt="Aamba's original handwritten diary note"
                      className="diary-photo"
                      onError={(event) => {
                        event.currentTarget.alt =
                          "Diary photo not found. Check public/diary-note.jpeg";
                      }}
                    />

                    <div className="photo-bottom">
                      Your words, forever special to me. ❤️
                    </div>

                  </div>

                  <p className="photo-caption">
                    I don't just love these words.
                    I love the person who wrote them.
                  </p>

                </section>

                {/* Existing romantic ending */}
                <section className="ending">

                  <div className="ending-hearts">♡ ♥ ♡</div>

                  <p className="ending-quote">
                    Some memories are not just saved
                    in photographs...
                  </p>

                  <p className="ending-quote">
                    They find a permanent place in our hearts.
                  </p>

                  <h2>From your Bawra</h2>

                  <div className="big-heart">❤️</div>

                  <p className="ending-small">
                    Made with lots of love
                    and a little courage, just for you.
                  </p>

                  <div className="last-line">
                    Always keep smiling, Aamba. ♡
                  </div>

                </section>

                {/* Final photo and apology message */}
                <section className="lifetime-section">

                  <p className="small-heading">
                    A LITTLE DREAM I WANTED TO SHARE
                  </p>

                  <h2 className="lifetime-heading">
                    From a Chance Meeting to a Lifetime Together… ❤️
                  </h2>

                  <div className="lifetime-photo-frame">

                    <img
                      src="/lifetime-love.png"
                      alt="A lifetime of love together"
                      className="lifetime-photo"
                      onError={(event) => {
                        event.currentTarget.alt =
                          "Collage not found. Check public/lifetime-love.png";
                      }}
                    />

                  </div>

                  {/* Apology message */}
                  <div className="apology-message">

                    <div className="message-heart">♡</div>

                    <p className="small-heading">
                      ONE LAST THING FROM MY HEART
                    </p>

                    <h2>
                      One Last Thing I Want You to Know… ❤️
                    </h2>

                    <p>
                      Please don't misunderstand this little effort.
                      This isn't a confession, and I'm not asking you
                      for an answer or a promise. It's simply a way
                      of sharing what I felt.
                    </p>

                    <p>
                      I'm not trying to break any of the clauses or
                      boundaries you made earlier. I remember them,
                      and I respect them with all my heart.
                    </p>

                    <p>
                      I'm sorry if anything here feels too much or
                      makes you uncomfortable. That was never my
                      intention. I never wanted to put pressure on
                      you or make things complicated.
                    </p>

                    <p>
                      I just wanted you to know that your presence,
                      your words, and the little moments we share
                      mean a lot to me. I don't know what tomorrow
                      holds, but I sincerely hope you don't leave
                      my life.
                    </p>

                    <p>
                      I hope we keep sharing our smiles, silly
                      arguments, little conversations, and beautiful
                      memories. I don't want to force a forever;
                      I only hope life gives us enough reasons
                      to stay connected, with kindness and care.
                    </p>

                    <h3>
                      Please stay a little longer… and, if life allows,
                      let us keep making beautiful memories together. ❤️
                    </h3>

                    <div className="apology-signature">
                      With all my affection,
                      <strong>Your Bawra ❤️</strong>
                    </div>

                  </div>

                </section>

              </>
            )}

          </section>

        )}

      </main>

      {/* Background music player */}
      <div
        className="music-player"
        aria-label="Background music controls"
      >

        <div className="music-player-copy">

          <span className="music-note">♫</span>

          <span>
            <strong>Surprise Song ❤️</strong>
            <small>A little melody, just for you ♡</small>
          </span>

        </div>

        <button
          className="music-toggle"
          onClick={toggleMusic}
          aria-label={
            isPlaying
              ? "Pause background music"
              : "Play background music"
          }
          title={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        {musicNotice && (
          <span className="music-notice">
            {musicNotice}
          </span>
        )}

      </div>

    </div>
  );
}
