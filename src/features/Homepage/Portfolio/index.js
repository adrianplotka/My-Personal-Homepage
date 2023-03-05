import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectReposStatus, selectRepos, fetchRepos } from "../personalHomepageSlice";
import { MyWorks } from "./myWorks";
import { Article, Header, Icon, Text } from "./styled";
import { ReactComponent as Git } from "./icon/git.svg";

const Portfolio = () => {
    const dispatch = useDispatch();

    const reposStatus = useSelector(selectReposStatus);
    const repositories = useSelector(selectRepos);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    return (
        <>
            <Article>
                <Icon>
                    <Git />
                </Icon>
                <Header>Portfolio</Header>
                <Text>My recent projects</Text>
            </Article>
            <MyWorks
                status={reposStatus}
                repositories={repositories} />
        </>
    );
};

export default Portfolio;