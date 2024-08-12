const Header = () => {
  return (
    <header className="w-full relative">
      <div className="w-full relative p-3 flex justify-between items-center container mx-auto ">
        <div className="hidden md:block text-2xl font-bold text-primary">
          BLOODSBD.COM
        </div>
        {/* right site of the website */}
        <div className="flex w-full justify-between md:justify-end items-center gap-4">
          {/* selected country */}

          <details className="dropdown">
            <summary className="text-lg font-semibold text-gray-700 cursor-pointer custom-arrow flex gap-2 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img src="https://flagcdn.com/48x36/bd.png" className="w-6" />
              <span>Bangladesh</span>
            </summary>
            <ul className="menu dropdown-content bg-primary gap-2 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <button className="btn glass btn-primary font-bold">
                  {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                  <img src="https://flagcdn.com/48x36/in.png" className="w-6" />
                  <span>India</span>
                </button>
              </li>
              <li>
                <button className="btn glass btn-primary font-bold">
                  {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                  <img src="https://flagcdn.com/48x36/us.png" className="w-6" />
                  <span>United State</span>
                </button>
              </li>
            </ul>
          </details>
          {/* cta */}
          <button className="btn btn-primary text-white font-bold ">
            Registration Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
