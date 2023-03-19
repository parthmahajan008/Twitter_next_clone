import Sidebar from "./layout/Sidebar";
import Followbar from "./layout/Followbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div
            className="
            col-span-3
            lg:col-span-2
            border-x-[1px]
            border-neutral-800
          "
          >
            {children}
          </div>
          <Followbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;

// "h-screen" sets the height of the element to the full height of the viewport.
// "bg-black" sets the background color of the element to black.
// "container" centers the element horizontally within its parent container.
// "h-full" sets the height of the element to 100% of its parent container.
// "mx-auto" centers the element horizontally within its parent container.
// "xl:px-30" sets the left and right padding of the element to 30 pixels on screens larger than the extra-large breakpoint.
// "max-w-6xl" sets the maximum width of the element to 6 times the width of its parent container.
