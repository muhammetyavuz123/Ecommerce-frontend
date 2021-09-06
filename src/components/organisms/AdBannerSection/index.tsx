/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { BannerCard } from "../../molecules/BannerCard";

export const AdBannerSection: FC<{}> = ({}) => (
  <>
    <div className="container mx-auto px-6 mb-8 mt-4">
      <BannerCard
        title="Spor Ayakkabı"
        description="  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur."
        image="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
      />
      <div className="md:flex mt-8  md:space-x-5 ">
        <BannerCard
          title="Spor Ayakkabı"
          description="  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur."
          image="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
        />
        <BannerCard
          title="Spor Ayakkabı"
          description="  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur."
          image="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
        />
      </div>
    </div>
  </>
);
