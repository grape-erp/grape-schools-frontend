// import logo from '../../../public/logo.png';

interface ILogoProps {
    vertical?: boolean;
    addClassName?: string;
    iconClassName?: string;
}

export function Logo({
    vertical = false,
    addClassName,
    iconClassName = 'w-20 h-10',
}: ILogoProps) {
    if (vertical) {
        return (
            <div
                className={`flex justify-center items-center  ${addClassName}`}
            >
                {/* <img src={logo} /> */}
            </div>
        );
    }
    return (
        <div
            className={`flex justify-center items-center space-x-2 text-gray-50 ${addClassName} ${iconClassName}`}
        >
            {/* <img src={logo} /> */}
        </div>
    );
}
