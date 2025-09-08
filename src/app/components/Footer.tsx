

export default function Footer() {
    return (
        <div className="flex w-full items-center gap-24 ">
            <div className="bottom-0 flex-row gap-4 items-end flex w-full md:items-center justify-between px-2 py-3 text-xs" >
                <div className="left flex flex-col gap-1 md:flex-row md:gap-8 md:pl-12">
                    <div className="nav_item cursor-pointer">Privacy</div>
                    <div className="nav_item cursor-pointer">Careers</div>
                    <div className="nav_item cursor-pointer">Terms</div>
                    <div className="nav_item cursor-pointer">Cookie Policy</div>
                    <div className="nav_item cursor-pointer">Legal</div>
                </div>
                <div className="right flex">
                    <div className="nav_item">© 2025 Form Inc. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}