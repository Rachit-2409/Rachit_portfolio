
import loading from '/images/animat-rocket_wht.gif'
const Loader = ({ loaded }) => {
    console.log(loaded)
    let display = loaded ? "flex" : "none";
    return (
        <div className={`bg-black opacity-90 h-full w-full flex justify-center items-center fixed top-0 z-50`} style={{ display }}>
            <img src={loading} alt="Loading..." className="h-[140px]" />
        </div>
    );
};

export default Loader