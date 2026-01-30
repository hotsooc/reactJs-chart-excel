'use client';

import ApplePayIcon from "../icons/apple-pay";
import FacebookIcon from "../icons/facebook-icon";
import GooglePayIcon from "../icons/google-pay";
import MaestroIcon from "../icons/maestro-icon";
import MasterCardIcon from "../icons/master-card";
import PaypalIcon from "../icons/paypal";
import VisaIcon from "../icons/visa";
import ZaloIcon from "../icons/zalo-icon";

export const FooterSection = () => {
    return (
        <footer id="footer">
            <div className="w-full h-12 bg-[#05545B]"></div>

            <div className="bg-[#212121] px-6 py-8 md:px-29.5 md:py-20 flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-295 mb-8 md:mb-14">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2 mb-6 md:mb-0 md:ml-70">
                        <span className="text-[#FFFFFF] text-sm md:text-[16px] font-normal leading-5 md:leading-6 mr-0 md:mr-7">
                            Accepted payment methods
                        </span>
                        <div className="flex items-center gap-4">
                            <a href="" target="_blank">
                                <VisaIcon className="w-[49.5px] h-4 md:w-[61.88px] md:h-5" />
                            </a>
                            <a href="" target="_blank">
                                <MasterCardIcon className="w-[20.77px] h-4 md:w-[25.96px] md:h-5" />
                            </a>
                            <a href="" target="_blank">
                                <MaestroIcon className="w-[20.75px] h-4 md:w-[25.94px] md:h-5" />
                            </a>
                            <a href="" target="_blank">
                                <PaypalIcon className="w-[59.36px] h-4 md:w-[74.2px] md:h-5" />
                            </a>
                            <a href="" target="_blank">
                                <ApplePayIcon className="w-[37.4px] h-4 md:w-[46.75px] md:h-5" />
                            </a>
                            <a href="" target="_blank">
                                <GooglePayIcon className="w-[38.86px] h-4 md:w-[48.577px] md:h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <a href="" target="_blank">
                            <FacebookIcon className="w-11 h-11 md:w-14 md:h-14" />
                        </a>
                        <a href="" target="_blank">
                            <ZaloIcon className="w-11 h-11 md:w-14 md:h-14"/>
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-301">
                    <div className="bg-[#909090] h-px mb-6" />
                    <h3 className="text-center text-[#D5A989] text-sm md:text-[16px] leading-5 md:leading-6 font-normal">
                        Copyright © 2010-2024 Luir Company S.L. All rights reserved.
                    </h3>
                </div>
            </div>
        </footer>
    );
};
