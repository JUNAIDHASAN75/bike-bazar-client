


const HeaderTitle = ({title,subTitle}) => {
    return (
        <div>
            <div >
                    <h2 className="text-4xl font-semibold">{title}</h2>
                    <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default HeaderTitle;