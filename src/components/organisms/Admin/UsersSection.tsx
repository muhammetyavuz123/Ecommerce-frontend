import { FC } from "react";
import { Header, SideBar, UserCard } from "../../molecules";

export const UsersSection: FC<{}> = () => {
  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          <Header />
          <SideBar />
          <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
