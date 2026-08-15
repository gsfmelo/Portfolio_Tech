<template>
  <footer class="estufa-footer">
    <div class="wrap footer-content">
      
      <p class="signature">feito com cultivo, código e um pouco de curiosidade.</p>
      
      <div class="footer-links">
        <a href="https://github.com/gsfmelo" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/geovanna-melo" target="_blank">LinkedIn</a>
        <a href="mailto:gsfmelo@gmail.com">E-mail</a>
      </div>
      
      <p class="copyright mono">© 2026 Geovanna Melo.</p>
      
    </div>
  </footer>
</template>

<style scoped>
.estufa-footer {
  background-color: var(--panel-green); 
  padding: 3rem 0;
  margin-top: 4rem;
  text-align: center;
  border-top: 1px solid var(--border-soft);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.signature {
  font-size: 15px;
  color: var(--text-dark);
  font-weight: 500;
  margin: 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.footer-links a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--green-3);
  text-decoration: none;
  text-transform: lowercase;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--terracota);
}

.copyright {
  font-size: 11px;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 600px) {
  .footer-links {
    gap: 16px;
  }
}
</style>