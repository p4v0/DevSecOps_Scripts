# DevSecOps
Repo para scripts de referencia de DevSecOps

Funciones de seguridad en GitHub que puedes activar

    Habilitar CodeQL:
        Ve a Settings → Code security and analysis → Activa Enable CodeQL analysis.

    Habilitar Dependabot Security Updates (solo notificaciones o aprobación manual):

        Ve a Settings → Code security and analysis.

        Activa Dependabot alerts y Dependabot security updates.

        Configura .github/dependabot.yml en tu repo para forzar aprobaciones manuales:

    version: 2
    updates:
      - package-ecosystem: "npm"
        directory: "/"
        schedule:
          interval: "weekly"
        open-pull-requests-limit: 5
        ignore:
          - dependency-name: "express"
            versions: ["4.x"]

Habilitar Secret Scanning & Push Protection (activado por default):

    Ve a Settings → Code security and analysis.
    Activa Secret scanning y Push protection.

Habilitar Alertas en PRs (GitHub Advanced Security):

    Activa Enable security alerts for pull requests en Settings → Security & analysis.
