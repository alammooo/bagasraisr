const JoinButtons = () => {
  return (
    <section className="flex flex-col gap-6 px-5 md:items-center">
      <button
        type="button"
        className="block w-full border-2 border-slate-600 px-5 py-1 text-center font-semibold uppercase tracking-wider text-slate-900 duration-300 hover:-translate-y-3 hover:bg-slate-700 hover:text-white md:w-fit"
      >
        Join Telegram
      </button>
      <button
        type="button"
        className="block w-full border-2 border-slate-600 px-5 py-1 text-center font-semibold uppercase tracking-wider text-slate-900 duration-300 hover:-translate-y-3 hover:bg-slate-700 hover:text-white md:w-fit"
      >
        Join Group Whatsapp <br /> -Pria- #2
      </button>
      <button
        type="button"
        className="block w-full border-2 border-slate-600 px-5 py-1 text-center font-semibold uppercase tracking-wider text-slate-900 duration-300 hover:-translate-y-3 hover:bg-slate-700 hover:text-white md:w-fit"
      >
        Join Group Whatsapp <br /> -Perempuan- #2
      </button>
    </section>
  );
};

export default JoinButtons;
