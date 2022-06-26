export const BackgroundImage = ({ image }) => {
    return (
        <div className="absolute z-30">
            <img src={image} alt="background" className="w-full h-full" />
            <div className="cc-overlay absolute z-50 top-0 left-0 w-full h-screen bg-black bg-opacity-30" />
        </div>
    );
};
