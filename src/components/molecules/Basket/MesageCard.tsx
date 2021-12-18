import { FC } from "react";

export const MesageCard: FC<{
  setAddress: (p: any) => void;
  address: any;
}> = ({ setAddress, address }) => {
  return (
    <>
      <div className="p-4 mt-6 bg-gray-100 rounded-full">
        <h1 className="ml-2 font-bold uppercase">Mesaj</h1>
      </div>
      <div className="p-4">
        <p className="mb-4 italic">
          Satıcıya Göndermek istediğiniz mesajı buraya giriniz.
        </p>
        <textarea
          className="w-full h-24 p-2 bg-gray-100 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};
