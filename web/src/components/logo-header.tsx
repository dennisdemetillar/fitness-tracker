import { Zap } from "lucide-react";

const LogoHeader = () => {
    return (
        <div className="flex items-center justify-center gap-x-1 ">
            <div className="bg-black rounded-full p-1 border border-[#41B06E]">
                <Zap size={35} color="#41B06E" />
            </div>
            <p className="text-2xl font-bold glow-text text-[#FFF5E0]">FitTrack</p>
        </div>
    );
};

export default LogoHeader;
