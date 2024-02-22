import { useEffect } from "react";

function Title() {
  const phrases = [
    "Build on",
    "Rootstock",
    "the most secure",
    "EVM-compatible",
    "Bitcoin",
    "Sidechain",
  ];

  useEffect(() => {
    const spans = document.querySelectorAll(".title-containecr .title span");
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;

    function resetTyping() {
      spans.forEach(span => { span.textContent = ""; });
      currentPhrase = 0;
      typeWriter();
    }

    function typeWriter() {
      if (currentPhrase < phrases.length) {
        const span = spans[currentPhrase];
        const text = phrases[currentPhrase];

        if (!isDeleting && currentChar < text.length) {
          span.textContent += text.charAt(currentChar++);
        }

        if (currentChar === text.length) {
          isDeleting = true; // Espera un poco antes de empezar a borrar
          setTimeout(() => {
            isDeleting = false;
            currentChar = 0;
            currentPhrase++;
            if (currentPhrase === phrases.length) {
              setTimeout(resetTyping, 5000); // Espera un poco antes de resetear todo
            } else {
              typeWriter(); // Continúa con la siguiente frase
            }
          }, 600); // Tiempo de espera antes de continuar con la siguiente frase o reiniciar
        } else if (!isDeleting) {
          setTimeout(typeWriter, 100); // Continúa escribiendo la frase actual
        }
      }
    }

    // typeWriter();

    return () => {
      spans.forEach(span => { span.textContent = ""; });
    };
  }, []);

  return (
    <div className="container-title">
      <h1 className="text-black title">
        <span className="bg-green">Build on</span>
        <span className="badge bg-green">Rootstock</span>
        <span className="bg-pink">the most secure</span>
        <span className="bg-white">EVM-compatible</span>
        <span className="bg-orange">Bitcoin</span>
        <span className="bg-orange">Sidechain</span>
      </h1>
    </div>
  );
}

export default Title;
