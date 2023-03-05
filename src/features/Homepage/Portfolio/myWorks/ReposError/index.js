import { WrapperError, IconError, HeaderError, InfoError } from "./styled";
import { ReactComponent as Danger } from "./icon/Danger.svg";
import { ButtonLink } from "../../../ButtonLink";

export const ReposError = () => {
    return (
        <WrapperError>
            <IconError>
                <Danger />
            </IconError>
            <HeaderError>Ooops! Something went wrong... </HeaderError>
            <InfoError>Sorry, failed to load Github projects.<br /> You can check them directly on Github.</InfoError>
            <ButtonLink target="_blank" href={"https://github.com/adrianplotka"}>Go to Github</ButtonLink>
        </WrapperError>
    )
};