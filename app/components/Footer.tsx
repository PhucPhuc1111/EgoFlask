import { Link, useMatches } from "@remix-run/react";
import _ from "lodash";

export const Footer = () => {
  const matches = useMatches();
  const last = (_.last(matches) as any)?.handle;  

  if (last?.hideFooter) return;
  return (
    <footer className="w-full">
    
      <div className="w-full border-8 border-[#0055C3] py-3">
        <div className="grid grid-cols-12">
          <div className="col-span-4 w-full ">
            
              <div className="">
                <div className="px-12 mt-16">
                     <img className="w-11/12 " src='/images/BigLogo.png' alt="" />
                     <div className="text-center ">
                  Refresh your vibe, express your side
                </div>
                </div>
               
               
             
            </div>
           
          </div>
          <div className="col-span-8 px-20 ">
            <div className="w-full flex p-12 text-black      ">
              <div className="w-1/3 space-y-12 ">
                <div className="text-lg w-[150px] pb-4  border-b-2 text-black font-semibold">Chính sách</div>
                <div className="space-y-3">
                  <div>
                    <Link className="text-black" to="/chinhhsachbaomat">Chính sách bảo mật</Link>
                  </div>
                  <div>
                    <Link className="text-black" to="/chinhhsachbaohanh">Chính sách bảo hành</Link>
                  </div>
                  <div>
                    <Link className="text-black" to="/chinhhsachdoitra">Chính sách đổi trả</Link>
                  </div>
                  <div>
                    <Link className="text-black" to="/chinhhsachvanchuyen">Chính sách vận chuyển</Link>
                  </div>
                </div>
              </div>
              <div className="w-1/3 space-y-12">
              <div className="text-lg w-[150px] pb-4  border-b-2 text-black font-semibold">Liên hệ</div>
                <div className="space-y-3">
                  <p>Email: egoflask@gmail.com</p>
                  <p>Phone: (+84)932.898.536</p>
                </div>
              </div>
              <div className="w-1/3 space-y-12">
              <div className="text-lg w-[150px] pb-4  border-b-2 text-black font-semibold">Social</div>

                <div className="space-y-3">
                  <div>
                    <Link className="text-black" to="/facebook">Facebook</Link>
                  </div>
                  <div>
                    <Link className="text-black" to="/instagram">Instagram</Link>
                  </div>
                  <div>
                    <Link className="text-black" to="/shopee">Shopee</Link>
                  </div>
                  <div>
                    <Link className="text-black" to="/tiktok">Tiktok</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="flex justify-center text-center mt-4 text-md w-full text-black  ">
            <div className=" w-5/6 border-t-2  ">
              <p className="mt-4">
                 Copyright ©2024 Ego Flask All rights reserved
            </p>   
            </div>
           
           
          </div>

      </div>
    </footer>
  );
};