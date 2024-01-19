import Map from "../../assets/images/MetroMap.svg";

export default function MetroMap({startResultClick}) {
  return (
    <div className="MetroMap">
      <img src={Map} alt="Map" className="Map" useMap="#Map"/>
      <map name="Map" id="Map">
        <area
          alt="이대"
          title="이대"
          coords="94,128,14"
          shape="circle"
          onClick={()=>{startResultClick("이대")}}
        />
        <area
          alt="신촌"
          title="신촌"
          coords="95,158,13"
          shape="circle"
        />
        <area
          alt="홍대입구"
          title="홍대입구"
          coords="94,189,14"
          shape="circle"
        />
        <area
          alt="합정"
          title="합정"
          coords="94,219,14"
          shape="circle"
        />
        <area
          alt="당산"
          title="당산"
          coords="94,249,14"
          shape="circle"
        />
        <area
          alt="영등포구청"
          title="영등포구청"
          coords="95,279,13"
          shape="circle"
        />
        <area
          alt="문래"
          title="문래"
          coords="95,308,13"
          shape="circle"
        />
        <area
          alt="신도림"
          title="신도림"
          coords="96,340,14"
          shape="circle"
        />
        <area
          alt="대림"
          title="대림"
          coords="96,370,14"
          shape="circle"
        />
        <area
          alt="구로디지털단지"
          title="구로디지털단지"
          coords="94,401,14"
          shape="circle"
        />
        <area
          alt="신대방"
          title="신대방"
          coords="94,430,14"
          shape="circle"
        />
        <area
          alt="신림"
          title="신림"
          coords="95,461,15"
          shape="circle"
        />
        <area
          alt="봉천"
          title="봉천"
          coords="94,493,13"
          shape="circle"
        />
        <area
          alt="서울대입구"
          title="서울대입구"
          coords="96,523,13"
          shape="circle"
        />
        <area
          alt="낙성대"
          title="낙성대"
          coords="94,552,14"
          shape="circle"
        />
        <area
          alt="사당"
          title="사당"
          coords="95,583,14"
          shape="circle"
        />
        <area
          alt="방배"
          title="방배"
          coords="95,614,14"
          shape="circle"
        />
        <area
          alt="서초"
          title="서초"
          coords="130,659,16"
          shape="circle"
        />
        <area
          alt="교대"
          title="교대"
          coords="181,658,15"
          shape="circle"
        />
        <area
          alt="강남"
          title="강남"
          coords="212,608,15"
          shape="circle"
        />
        <area
          alt="역삼"
          title="역삼"
          coords="212,578,14"
          shape="circle"
        />
        <area
          alt="선릉"
          title="선릉"
          coords="212,549,14"
          shape="circle"
        />
        <area
          alt="삼성"
          title="삼성"
          coords="213,520,14"
          shape="circle"
        />
        <area
          alt="종합운동장"
          title="종합운동장"
          coords="212,491,14"
          shape="circle"
        />
        <area
          alt="잠실새내"
          title="잠실새내"
          coords="213,461,14"
          shape="circle"
        />
        <area
          alt="잠실"
          title="잠실"
          coords="213,431,15"
          shape="circle"
        />
        <area
          alt="잠실나루"
          title="잠실나루"
          coords="213,401,14"
          shape="circle"
        />
        <area
          alt="강변"
          title="강변"
          coords="212,372,13"
          shape="circle"
        />
        <area
          alt="구의"
          title="구의"
          coords="212,343,14"
          shape="circle"
        />
        <area
          alt="건대입구"
          title="건대입구"
          coords="212,312,15"
          shape="circle"
        />
        <area
          alt="성수"
          title="성수"
          coords="212,283,13"
          shape="circle"
        />
        <area
          alt="뚝섬"
          title="뚝섬"
          coords="213,254,14"
          shape="circle"
        />
        <area
          alt="한양대"
          title="한양대"
          coords="212,225,14"
          shape="circle"
        />
        <area
          alt="왕십리"
          title="왕십리"
          coords="211,195,15"
          shape="circle"
        />
        <area
          alt="상왕십리"
          title="상왕십리"
          coords="212,164,13"
          shape="circle"
        />
        <area
          alt="신당"
          title="신당"
          coords="212,136,14"
          shape="circle"
        />
        <area
          alt="동대문역사문화공원"
          title="동대문역사문화공원"
          coords="212,107,13"
          shape="circle"
        />
        <area
          alt="을지로4가"
          title="을지로4가"
          coords="212,76,14"
          shape="circle"
        />
        <area
          alt="을지로3가"
          title="을지로3가"
          coords="212,46,15"
          shape="circle"
        />
        <area
          alt="을지로입구"
          title="을지로입구"
          coords="177,19,14"
          shape="circle"
        />
        <area
          alt="시청"
          title="시청"
          coords="135,21,14"
          shape="circle"
        />
        <area
          alt="충정로"
          title="충정로"
          coords="95,68,13"
          shape="circle"
        />
        <area
          alt="아현"
          title="아현"
          coords="95,99,14"
          shape="circle"
        />
      </map>
    </div>
  );
}