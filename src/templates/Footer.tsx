const links = {
  grid1: [
    { title: 'Accueil', link: '#home' },
    { title: 'Tarifs', link: '#pricing' },
    { title: 'Blog', link: '#blog' },
    { title: 'Contact', link: '#contact' },
  ],
  grid2: [
    {
      title: 'Se connecter',
      link: 'https://app.dugassistant.com',
    },
    {
      title: "Termes et conditions d'utilisation",
      link: 'https://helpful-vermicelli-00f.notion.site/Termes-et-conditions-d-utilisation-ebd469acacd945ebaabf6476041ac772?pvs=4',
    },
    {
      title: 'Politique de confidentialité',
      link: 'https://helpful-vermicelli-00f.notion.site/Politique-de-confidentialit-316f5dd689e84deeb7c05022335ad6f0?pvs=4',
    },
  ],
};

const Footer = () => (
  <footer className="flex flex-col gap-4 bg-back-100 p-[2px] dark:bg-primary-400 md:gap-16">
    <div className="flex flex-col justify-between gap-6 bg-white/20 px-4 py-2 text-white md:flex-row md:items-center md:px-32 md:py-6">
      <h3 className="text-[14px] font-semibold md:text-[18px]">
        Soyez excellent et fiable, le monde compte sur vous{' '}
      </h3>

      <div className="flex flex-row items-center gap-4 md:gap-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/showcase/dugassistant/?viewAsMember=true"
          target="_blank"
          className="text-white hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="h-3 w-4 md:h-5 md:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.73V1.73C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.44a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM20.45 20.45h-3.56v-5.4c0-1.29-.03-2.94-1.8-2.94-1.8 0-2.08 1.4-2.08 2.84v5.5H9.45V9h3.42v1.56h.05c.47-.89 1.63-1.8 3.36-1.8 3.6 0 4.27 2.37 4.27 5.45v6.24z" />
          </svg>
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@harvelyc"
          target="_blank"
          className="text-white hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="h-3 w-4 md:h-5 md:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4.8 5.4c-.02 0-.06.02-.08.03l-4.12 1.56a.4.4 0 00-.2.34v10.48a.4.4 0 00.2.34l4.12 1.56c.02.01.06.03.08.03.15 0 .2-.12.2-.26V5.66c0-.14-.05-.26-.2-.26zm3.26 1.88c-.2 0-.26.14-.26.24v10.6c0 .1.06.24.26.24h.2l6.66-5.6a.2.2 0 000-.32L8.26 7.3h-.2zm7.36.16a.2.2 0 00-.16.2v5.9c0 .04.02.1.05.14l3.7 4.5c.03.03.06.04.1.04.02 0 .05-.02.08-.03l3.28-1.23a.4.4 0 00.24-.36V8.36a.4.4 0 00-.24-.36l-3.28-1.23c-.03-.01-.06-.02-.08-.02a.2.2 0 00-.15.08l-3.7 4.5a.2.2 0 00-.05.14V7.7a.2.2 0 00-.2-.2h-.2z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61562272059423"
          target="_blank"
          className="text-white hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="size-4 md:size-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* X (formerly Twitter) */}
        <a
          href="https://x.com/harvelyc"
          target="_blank"
          className="text-white hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="size-4 md:size-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.5 2h-15A2.5 2.5 0 002 4.5v15A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0019.5 2zm-3.78 14.78l-2.47-2.47-2.47 2.47a.75.75 0 01-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 011.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 111.06 1.06l-2.47 2.47 2.47 2.47a.75.75 0 11-1.06 1.06z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/dugassistant"
          target="_blank"
          className="text-white hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="size-4 md:size-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>

    <div className="flex flex-col justify-between px-4 md:flex-row md:px-32">
      <div className="w-full md:w-[33%]">
        <div className="mb-6 mt-8 flex flex-row items-center gap-2 md:mt-0">
          <img
            src="/logo192.png"
            alt="logo1"
            className=" h-6 w-auto rounded-[8px] text-white md:h-8"
          />
          <p className="text-[16px] font-semibold text-white dark:text-white md:text-[18px] ">
            DugAssistant
          </p>
        </div>

        <p className="text-[12px] text-white/90 dark:text-gray-400 md:text-[16px]">
          Conçue pour aider les enseignants du primaire et du secondaire à
          préparer leurs cours de manière efficace. Contribue à la réduction des
          inégalités et à l’amélioration de la qualité de l’enseignement en RDC.
        </p>
      </div>

      <div>
        <h2 className="mb-6 mt-8 text-[14px] font-bold uppercase text-white md:mt-0 md:text-[16px] ">
          Liens utiles
        </h2>
        <ul className="text-white/90 dark:text-gray-400">
          {links.grid1.map((grid, key) => (
            <li key={key} className="mb-4 text-[12px] md:text-[14px]">
              <a href={grid.link} className="hover:underline">
                {grid.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-6 mt-8 text-[14px] font-bold uppercase text-white md:mt-0 md:text-[16px] ">
          Savoir plus
        </h2>
        <ul className="text-white/90 dark:text-gray-400">
          {links.grid2.map((grid, key) => (
            <li key={key} className="mb-4 text-[12px] md:text-[14px]">
              <a href={grid.link} target="_blank" className="hover:underline">
                {grid.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="px-4 md:px-32">
      <hr className="h-px w-full bg-white/60 dark:border-gray-700 sm:mx-auto" />
      <div className="flex flex-row items-center justify-between py-4 sm:flex sm:items-center sm:justify-between">
        <span className="text-[8px] text-white dark:text-gray-400 sm:text-center md:text-[10px]">
          © {new Date().getFullYear()}{' '}
          <a href="https://www.dugassistant.com" className="hover:underline">
            Dug Assistant™
          </a>
          . Tous droits réservés.
        </span>

        <span className="text-[8px] text-white dark:text-gray-400 sm:text-center md:text-[10px]">
          Un produit de Harvely Company
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
