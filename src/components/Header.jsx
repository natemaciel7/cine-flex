import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/a320/d762/672523591ef2f811a382ae5c89e262c0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ErUPEBQhLkzkbhDThqLX9i3jTD2tZH5rBRBlEPW8uqiuR5ca4OcC9kK7ru~6rIU4zWYkGWwE~G6DJo6dl-2BqjlD26lKcrxgcFvHy6sARchkaQJ18LROK5xKZY32ugDS0KsTONFNmXWrlpU-AG457dNk0qEPpGIV050yyDywlQlLWlVWFO68rFhdM3V4Qbh7exya5PC2z5sQAx4c0TFdhW8nWpGxKjA7WnikoGBldVD1HaKbCYkBliEgjkF0Hf3SqMy68Gk2eRzSUFV96cKevyCRuyB5YU~3HTo1~upL6t6mFlt0K9zOtDpjmHOZ--sqnDIVo-lu0imbLterHOl1Sg__"
        alt="Logo Cineflex"
      />
      <h1>Cineflex</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: #EE897F;
  padding: 10px;
  text-align: center;
  font-size: 40px;
  color: #FADBC5;
  
  img {
    width: 30px;
    margin-right: 10px;

  }

  h1 {
    display: inline;
    font-size: 40px;
    
  }
`;

