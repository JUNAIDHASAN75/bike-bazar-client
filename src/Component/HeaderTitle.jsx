


const HeaderTitle = ({title,subTitle}) => {
    return (
        <div className="my-3">
            <div className="text-center">
                    <h2 className="text-5xl font-bold text-black">{title}</h2>
                    <p className="text-[#E76F51] font-semibold underline">{subTitle}</p>
                    
            </div>
        </div>
    );
};

export default HeaderTitle;