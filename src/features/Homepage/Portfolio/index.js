import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectReposStatus, selectRepos, fetchRepos } from "../personalHomepageSlice";
import { MyWorks } from "./myWorks";

const Portfolio = () => {
    const dispatch = useDispatch();

    const reposStatus = useSelector(selectReposStatus);
    const repositories = useSelector(selectRepos);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    return (
        <>
            <MyWorks
                status={reposStatus}
                repositories={repositories} />
        </>
    );
}

export default Portfolio;