import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__developer">
        Developer:{' '}
        <a href="https://github.com/stolbovvv" target="_blank" rel="noopener noreferrer">
          stolbovvv
        </a>
      </span>
      <span className="footer__tags">React | 2023</span>
    </footer>
  );
}

export { Footer };
