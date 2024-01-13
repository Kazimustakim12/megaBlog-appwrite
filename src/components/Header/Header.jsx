import { LogoutBtn, Container } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Button from "../Button/Button";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  // const authStatus = false;
  const navigate = useNavigation();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Post ",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post ",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <div>
      <header>
        <Container>
          <nav
            className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
            data-te-navbar-ref
          >
            <div className="flex w-full flex-wrap items-center justify-between px-3">
              <div>
                <Link
                  to="/"
                  className="mx-2 my-1 flex items-center text-neutral-100 hover:text-neutral-400  focus:text-neutral-900 lg:mb-0 lg:mt-0"
                >
                  BLog Kazi
                </Link>
              </div>

              <button
                className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent4"
                aria-controls="navbarSupportedContent4"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="[&>svg]:w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <div
                className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent4"
                data-te-collapse-item
              >
                <ul
                  className="list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                  data-te-navbar-nav-ref
                >
                  {navItems.map((item, index) =>
                    item.active ? (
                      <li
                        key={index}
                        className={
                          item.active
                            ? "border-b-2 border-transparent text-white py-2 lg:py-0 lg:border-b-0"
                            : "border-b-2 border-transparent py-2 lg:py-0 lg:border-b-0"
                        }
                      >
                        <Button
                          onClick={() => navigate(item.slug)}
                          type={"button"}
                          title={item.name}
                          varient={"normal"}
                          isActive={item.active}
                        ></Button>
                      </li>
                    ) : null
                  )}
                </ul>
                <div>{authStatus && <LogoutBtn />}</div>
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;
