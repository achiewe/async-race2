import Button from "../../buttons/Button";
import "./PageNav.css";
import PageNavItem from "./PageNavItem";
import PropsNavPage from "../../../types/PropsNavPage";

function PageNav({ page, path, pagesAmount }: PropsNavPage): JSX.Element {
  const toNext = () => {
    if (page.activeContent < pagesAmount) {
      page.setActiveContent(page.activeContent + 1);
    }
  };

  const toPrev = () => {
    if (page.activeContent > 1) {
      page.setActiveContent(page.activeContent - 1);
    }
  };

  return (
    <nav className="pageNavPagination">
      <Button
        className="button btnPrev"
        text="prev"
        disabled={page.activeContent === 1}
        handleClick={toPrev}
      />

      <ul className="pageList">
        {Array.from(Array(pagesAmount).keys()).map((num, idx) => (
          <PageNavItem
            className="page"
            path={path}
            page={num + 1}
            isActive={page.activeContent === num + 1}
            setActivePage={page.setActiveContent}
            key={`${idx.toString()}`}
          />
        ))}
      </ul>

      <Button
        className="button btnNext"
        text="next"
        disabled={page.activeContent === pagesAmount}
        handleClick={toNext}
      />
    </nav>
  );
}

export default PageNav;
