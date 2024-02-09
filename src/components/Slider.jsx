// Slider.js
import ReactSlider from "react-slider";
import "./Slider.css";

const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      marks={[
        { value: 0, label: "Step 1" },
        { value: 1, label: "Step 2" },
        { value: 2, label: "Step 3" },
        { value: 3, label: "Step 4" },
        { value: 4, label: "Step 5" },
      ]}
    //   defaultValue={0}
    //   value={currentIndex}
    //   renderMark={(props) => <div {...props} className={`example-mark ${props.index === currentIndex ? "active" : ""}`} />}
    //   onChange={handleNext}
    />
  );
};

export default Slider;