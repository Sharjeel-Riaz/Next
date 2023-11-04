export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-1 px-24">
        <div className="container mx-auto px-4">
          {/* 2nd row starts here  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    Link 1
                  </a>
                </li>

                {/* Add more links */}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Headline</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    Link 2
                  </a>
                </li>
                {/* Add more links */}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    +92300
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    @filler.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300  pb-1 block"
                  >
                    Link 2
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li className="flex space-x-3">
                  <a
                    href="#"
                    style={{ width: "40px", height: "40px" }}
                    className=" hover:bg-white text-white hover:text-gray-900 w-1/4 border rounded-full border-gray-100 flex items-center justify-center p-2 transition-all duration-300"
                  >
                    <i className="text-2xl fab fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    style={{ width: "40px", height: "40px" }}
                    className=" hover:bg-white text-white hover:text-gray-900 w-1/4 border rounded-full border-gray-100 flex items-center justify-center p-2 transition-all duration-300"
                  >
                    <i className="text-2xl fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    style={{ width: "40px", height: "40px" }}
                    className=" hover:bg-white text-white hover:text-gray-900 w-1/4 border rounded-full border-gray-100 flex items-center justify-center p-2 transition-all duration-300"
                  >
                    <i className="text-2xl fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    style={{ width: "40px", height: "40px" }}
                    className=" hover:bg-white text-white hover:text-gray-900 w-1/4 border rounded-full border-gray flex items-center justify-center p-2 transition-all duration-300"
                  >
                    <i className="text-2xl fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
