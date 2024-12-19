import styled from "styled-components";

//common
import ImageBox from "components/common/ImageBox";
import LinkButtonWhite from "components/common/LinkButtonWhite";

// function
import ResizeMobile from "components/common/ResizeMobile";

function HomeTipContentLayout({ data }) {
  const isImageTypeMobile = ResizeMobile(); // 디바이스 모바일/PC 상태 : true 일 때 모바일
  return (
    <ContentsContainer>
      {/* 타이틀 */}
      <TopTitleArea>
        <TopTitleBox>
          {isImageTypeMobile ? (
            <>
              <div className="top-title-sub">{data.topTitleArea.titleSub}</div>
              <h2 className="top-title-main">{data.topTitleArea.titleMain}</h2>
            </>
          ) : (
            <>
              <h2 className="top-title-main">{data.topTitleArea.titleMain}</h2>
              <div className="top-title-sub">{data.topTitleArea.titleSub}</div>
            </>
          )}
        </TopTitleBox>

        {isImageTypeMobile ? (
          <TopTitleImageBox
            src={require(`assets/images/home/features/${data.imageFolder}/${data.topTitleArea.titleImage.src}_mo.jpg`)}
            alt={data.topTitleArea.titleImage.alt}
          />
        ) : (
          <TopTitleImageBox
            src={require(`assets/images/home/features/${data.imageFolder}/${data.topTitleArea.titleImage.src}_pc.jpg`)}
            alt={data.topTitleArea.titleImage.alt}
          />
        )}
      </TopTitleArea>

      {/* 내용 */}
      <ContentInner>
        <MiddleTitleArea>
          <MiddleTitleBox>
            {data.middleTitleArea.titleLabel && (
              <div className="middle-title-label">
                {data.middleTitleArea.titleLabel}
              </div>
            )}
            <div className="middle-title-main">
              {data.middleTitleArea.titleMain}
            </div>
            {data.middleTitleArea.titleSub && (
              <div className="middle-title-sub">
                {data.middleTitleArea.titleSub}
              </div>
            )}
          </MiddleTitleBox>
          {isImageTypeMobile ? (
            <MiddleTitleImageBox
              src={require(`assets/images/home/features/${data.imageFolder}/${data.middleTitleArea.titleImage.src}_mo.jpg`)}
              alt={data.middleTitleArea.titleImage.alt}
            />
          ) : (
            <MiddleTitleImageBox
              src={require(`assets/images/home/features/${data.imageFolder}/${data.middleTitleArea.titleImage.src}_pc.jpg`)}
              alt={data.middleTitleArea.titleImage.alt}
            />
          )}
          <NoticeBox>{noticeText}</NoticeBox>
        </MiddleTitleArea>

        {data.middleFlexArea.map((row, index) => (
          <MiddleFlexArea
            key={index.toString()}
            className={row.textFirst === true ? "text-first" : "img-first"}
          >
            {row.textFirst === true ? (
              <>
                <div className="row-left">
                  <ArticleTextBox>
                    <span className="article-label">{row.articleLabel}</span>
                    <div className="article-title">{row.articleTitle}</div>
                    <div className="article-text">{row.articleText}</div>
                    {row.articleLinkTit && !isImageTypeMobile && (
                      <ArticleLink
                        aesthetic={"arrowBlack"}
                        to={row.articleLinkUrl}
                      >
                        {row.articleLinkTit}
                      </ArticleLink>
                    )}
                  </ArticleTextBox>
                </div>
                <div className="row-right">
                  {isImageTypeMobile ? (
                    <ArticleImageBox
                      src={require(`assets/images/home/features/${data.imageFolder}/${row.articleImage.src}_mo.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  ) : (
                    <ArticleImageBox
                      src={require(`assets/images/home/features/${data.imageFolder}/${row.articleImage.src}_pc.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  )}
                  {row.articleLinkTit && isImageTypeMobile && (
                    <ArticleLink
                      aesthetic={"arrowBlack"}
                      to={row.articleLinkUrl}
                    >
                      {row.articleLinkTit}
                    </ArticleLink>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="row-right">
                  <ArticleTextBox>
                    <span className="article-label">{row.articleLabel}</span>
                    <div className="article-title">{row.articleTitle}</div>
                    <div className="article-text">{row.articleText}</div>
                    {!isImageTypeMobile && (
                      <ArticleLink
                        aesthetic={"arrowBlack"}
                        to={row.articleLinkUrl}
                      >
                        {row.articleLinkTit}
                      </ArticleLink>
                    )}
                  </ArticleTextBox>
                </div>
                <div className="row-left">
                  {isImageTypeMobile ? (
                    <ArticleImageBox
                      src={require(`assets/images/home/features/${data.imageFolder}/${row.articleImage.src}_mo.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  ) : (
                    <ArticleImageBox
                      src={require(`assets/images/home/features/${data.imageFolder}/${row.articleImage.src}_pc.jpg`)}
                      alt={row.articleImage.alt}
                    />
                  )}
                  {isImageTypeMobile && (
                    <ArticleLink
                      aesthetic={"arrowBlack"}
                      to={row.articleLinkUrl}
                    >
                      {row.articleLinkTit}
                    </ArticleLink>
                  )}
                </div>
              </>
            )}
          </MiddleFlexArea>
        ))}
      </ContentInner>
    </ContentsContainer>
  );
}

const ArticleLink = styled(LinkButtonWhite)`
  max-width: initial;
  width: auto;
  margin-top: 3rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 7rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ArticleTextBox = styled.div`
  word-break: keep-all;
  & > .article-label {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.3;
    color: #666666;
  }
  & > .article-title {
    margin-top: 1rem;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.4;
    color: #0f0f0f;
    letter-spacing: -2px;
  }
  & > .article-text {
    margin-top: 1.4rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #000000;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    width: 100%;
    max-width: 63.3rem;
    br {
      display: none;
    }
    & > .article-label {
      font-size: 2.4rem;
    }
    & > .article-title {
      font-size: 4.8rem;
    }
    & > .article-text {
      margin-top: 2rem;
      font-size: 1.8rem;
      color: #333333;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    text-align: center;
    & > .article-label {
      margin-bottom: 1rem;
    }
  }
`;
const ArticleImageBox = styled(ImageBox)`
  overflow: hidden;
  border-radius: 25px;
`;
const MiddleFlexArea = styled.div`
  margin-bottom: 8.9rem;
  & > .row-left {
    order: 0;
  }
  & > .row-right {
    order: 1;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12.2rem;
    &.img-first {
      & > .row-right {
        margin-left: 9.6rem;
        margin-right: auto;
      }
    }
    &.text-first {
      & > .row-left {
        margin-right: 5.7rem;
      }
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    &.img-first {
      & > .row-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 6rem;
      }
    }
    &.text-first {
      & > .row-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 6rem;
      }
    }
  }
`;

const MiddleTitleImageBox = styled(ImageBox)`
  /* PC */
  @media screen and (min-width: 769px) {
    overflow: hidden;
    border-radius: 18px;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    width: auto;
    margin-left: -1.6rem;
    margin-right: -1.6rem;
  }
`;
const MiddleTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6rem;
  word-break: keep-all;
  & > .middle-title-label {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.3;
    color: #666666;
  }
  & > .middle-title-main {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.4;
    color: #0f0f0f;
    text-align: center;
  }
  & > .middle-title-sub {
    margin-top: 1.4rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #000000;
    text-align: center;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 6.1rem;
    br {
      display: none;
    }
    & > .middle-title-label {
      font-size: 2.4rem;
    }
    & > .middle-title-main {
      font-size: 4.8rem;
    }
    & > .middle-title-sub {
      font-size: 1.8rem;
    }
  }
`;
const MiddleTitleArea = styled.div`
  margin-bottom: 4rem;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 14.3rem;
  }
`;

const NoticeBox = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
  color: #aaaaaa;
  word-break: keep-all;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-top: 1.2rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const TopTitleImageBox = styled(ImageBox)`
  background-color: #aba18b;
  /* PC */
  @media screen and (min-width: 769px) {
    min-height: 50rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    position: relative;
    min-height: 30rem;
  }
`;
const TopTitleBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  color: #ffffff;
  word-break: keep-all;
  & > .top-title-main {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.3;
    color: inherit;
  }
  & > .top-title-sub {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5;
    color: inherit;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    padding-left: 21%;
    & > .top-title-main {
      font-size: 3.8rem;
    }
    & > .top-title-sub {
      margin-top: 3.1rem;
      font-size: 2.4rem;
      font-weight: 400;
    }
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 5.1rem;
    align-items: center;
    text-align: center;
    & > .top-title-main {
      margin-top: 1rem;
    }
  }
`;
const TopTitleArea = styled.div`
  position: relative;
  max-width: 161.4rem;
  margin: 0 auto;
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 15rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 9rem;
    ${NoticeBox} {
      padding: 0 1.6rem;
    }
  }
`;

const ContentInner = styled.div`
  max-width: 138rem;
  margin: 0 auto;
  padding: 0 1.6rem;
  box-sizing: content-box;
`;
const ContentsContainer = styled.div`
  .mo-inline {
    display: block;
  }
  /* PC */
  @media screen and (min-width: 769px) {
    margin-bottom: 15rem;
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 9rem;
    .mo-inline {
      display: inline;
    }
  }
`;

const noticeText =
  "* 소비자의 이해를 돕기 위해 연출된 이미지이며, 제품별 색상 및 스펙은 상이합니다.";

export default HomeTipContentLayout;
