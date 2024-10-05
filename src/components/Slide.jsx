import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slidercontents">
          <div className="wrapText">
            <h1>슬라이드 1</h1>
            <div className="d-none d-md-block">
              <p>
                Carousel 컴포넌트를 사용하여 슬라이드를 적용했습니다.
                Carousel컴포넌트 안에 Carousel.Item컴포넌트를 함께 사용해야
                합니다.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidercontents2">
          <div className="wrapText">
            <h1>슬라이드 2</h1>
            <div className="d-none d-md-block">
              <p>사진과 배경설정 등은 index.css안에 css코드로 해결했습니다.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
