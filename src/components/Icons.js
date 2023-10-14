import * as React from "react"
import { cx } from "../utils"
export const LinkedinIcon = ({className, ...rest}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={43}
        viewBox="0 0 42 43"
        fill="none"
        {...rest}
        className={cx("w-full h-auto", className)}
    >
        <g clipPath="url(#a)">
        <path
            fill="#0076B2"
            d="M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z"
        />
        <path
            fill="#fff"
            d="M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z"
        />
        </g>
        <defs>
        <clipPath id="a">
            <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
        </defs>
    </svg>
    )
export default LinkedinIcon
    export const GithubIcon = ({ className, ...rest }) => {
        return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={42}
            height={44}
            viewBox="0 0 42 44"
            className={cx("w-full h-auto", className)}
            {...rest}
        >
            <path
            fillRule="evenodd"
            d="M21 1.739c-10.942 0-19.815 9.212-19.815 20.577 0 9.091 5.678 16.804 13.55 19.525.99.191 1.354-.446 1.354-.99 0-.49-.018-2.111-.027-3.83-5.512 1.244-6.675-2.428-6.675-2.428-.902-2.379-2.2-3.011-2.2-3.011-1.799-1.277.135-1.25.135-1.25 1.99.144 3.038 2.12 3.038 2.12 1.767 3.145 4.635 2.236 5.766 1.71.177-1.33.691-2.238 1.258-2.752-4.401-.52-9.028-2.284-9.028-10.168 0-2.247.774-4.082 2.042-5.524-.206-.518-.885-2.61.191-5.445 0 0 1.664-.553 5.45 2.11A18.325 18.325 0 0 1 21 11.688c1.683.008 3.38.236 4.963.693 3.782-2.663 5.444-2.11 5.444-2.11 1.079 2.834.4 4.928.195 5.445 1.27 1.442 2.039 3.277 2.039 5.524 0 7.903-4.635 9.643-9.048 10.153.711.638 1.345 1.891 1.345 3.81 0 2.754-.023 4.97-.023 5.647 0 .548.357 1.19 1.36.987 7.87-2.724 13.54-10.434 13.54-19.522 0-11.364-8.872-20.577-19.815-20.577Z"
            clipRule="evenodd"
            />
            <path d="M8.69 31.282c-.044.103-.198.133-.34.063-.144-.066-.224-.206-.178-.308.043-.106.198-.135.342-.064.144.067.226.207.176.31Zm.803.93c-.095.091-.28.049-.405-.095-.13-.143-.154-.335-.058-.427.098-.091.277-.048.407.095.13.145.155.335.056.428Zm.781 1.185c-.121.088-.32.006-.443-.177-.121-.183-.121-.403.004-.49.122-.089.318-.01.442.172.121.186.121.406-.003.495Zm1.07 1.145c-.108.125-.34.091-.509-.078-.173-.166-.221-.402-.113-.526.11-.125.343-.09.514.078.173.166.225.402.109.526Zm1.477.665c-.048.161-.27.234-.496.166-.224-.07-.37-.26-.324-.422.045-.163.27-.239.496-.165.224.07.37.257.324.421Zm1.622.123c.005.17-.185.31-.42.314-.237.005-.43-.132-.432-.3 0-.17.187-.31.424-.314.235-.005.428.132.428.3Zm1.508-.266c.029.165-.135.335-.369.38-.23.045-.443-.058-.473-.222-.028-.17.139-.34.369-.384.234-.042.444.058.473.226Z" />
        </svg>
        );
    };
    export const SunIcon = ({ className, ...rest }) => (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={cx("w-full h-auto", className)}
        >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
            <animate
                fill="freeze"
                attributeName="d"
                begin="1.2s"
                dur="0.2s"
                values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
            />
            <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="1.2s"
                dur="0.2s"
                values="2;0"
            />
            </path>
            <path d="M0 0">
            <animate
                fill="freeze"
                attributeName="d"
                begin="1.5s"
                dur="0.2s"
                values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
            />
            <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="1.5s"
                dur="1.2s"
                values="2;0"
            />
            </path>
            <animateTransform
            attributeName="transform"
            dur="30s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                dur="0.4s"
                values="1;0"
            />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.2s"
                dur="0.4s"
                values="1;0"
            />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
            <animate
                fill="freeze"
                attributeName="cx"
                begin="0.6s"
                dur="0.4s"
                values="18;22"
            />
            <animate
                fill="freeze"
                attributeName="cy"
                begin="0.6s"
                dur="0.4s"
                values="6;2"
            />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="12;3"
            />
            </circle>
            <circle cx="18" cy="6" r="10">
            <animate
                fill="freeze"
                attributeName="cx"
                begin="0.6s"
                dur="0.4s"
                values="18;22"
            />
            <animate
                fill="freeze"
                attributeName="cy"
                begin="0.6s"
                dur="0.4s"
                values="6;2"
            />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;1"
            />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;6"
            />
        </circle>
        </svg>
    );
    
    export const MoonIcon = ({ className, ...rest }) => (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={cx("w-full h-auto", className)}
        >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
            <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.2s"
                values="4;2"
                />
            </path>
            <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.2s"
                dur="0.2s"
                values="4;2"
                />
            </path>
            </g>
            <path
            fill="currentColor"
            d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
            opacity="0"
            >
            <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
            <animate
                id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                dur="0.4s"
                values="0;1"
            />
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                dur="0.4s"
                values="1;0"
            />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                dur="0.4s"
                values="0;1"
            />
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                dur="0.4s"
                values="1;0"
            />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                dur="0.4s"
                values="0;1"
            />
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                dur="0.4s"
                values="1;0"
            />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                dur="0.4s"
                values="0;1"
            />
            <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                dur="0.4s"
                values="1;0"
            />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
            <animate
                fill="freeze"
                attributeName="cx"
                begin="0.1s"
                dur="0.4s"
                values="22;18"
            />
            <animate
                fill="freeze"
                attributeName="cy"
                begin="0.1s"
                dur="0.4s"
                values="2;6"
            />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="3;12"
            />
            </circle>
            <circle cx="22" cy="2" r="1">
            <animate
                fill="freeze"
                attributeName="cx"
                begin="0.1s"
                dur="0.4s"
                values="22;18"
            />
            <animate
                fill="freeze"
                attributeName="cy"
                begin="0.1s"
                dur="0.4s"
                values="2;6"
            />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="1;10"
            />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="6;10"
            />
        </circle>
        </svg>
        );

        export const ArrowUp = ({className, ...rest }) => {
            return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                className={cx("w-full h-auto", className)}
            {...rest}
            >
                <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m4 16 8-8 8 8"
                />
            </svg>
            );
        };
        
    export const WebsiteSVG = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 512 512"
        {...props}
    >
        <path d="M0 57.332h512v397.336H0z" />
        <circle
        cx={44.192}
        cy={89.38}
        r={8.928}
        style={{
            fill: "#e21b1b",
        }}
        />
        <g
        style={{
            opacity: 0.7,
        }}
        >
        <circle
            cx={70.968}
            cy={89.38}
            r={8.928}
            style={{
            fill: "#fff",
            }}
        />
        </g>
        <circle
        cx={97.736}
        cy={89.38}
        r={8.928}
        style={{
            fill: "#666",
        }}
        />
        <path
        d="M443.52 105.06H155.96l19.12-31.344h287.576z"
        style={{
            fill: "#666",
        }}
        />
        <path
        d="m195.2 82.396 1.856 7.128c.408 1.56.8 3.008 1.048 4.456h.096c.312-1.416.8-2.92 1.24-4.424l2.296-7.16h2.144l2.168 7.008c.52 1.672.928 3.16 1.248 4.576h.088c.28-1.536.64-3.048 1.08-4.544l2.008-7.04h2.52l-4.52 14.016h-2.312l-2.144-6.688c-.488-1.6-.896-2.952-1.248-4.616h-.056a40.651 40.651 0 0 1-1.28 4.64l-2.264 6.664h-2.312l-4.224-14.016h2.568zM216.856 82.396l1.856 7.128c.408 1.56.8 3.008 1.048 4.456h.088c.32-1.416.8-2.92 1.248-4.424l2.28-7.16h2.144l2.176 7.008c.52 1.672.928 3.16 1.24 4.576h.096a39.915 39.915 0 0 1 1.08-4.544l2.008-7.04h2.52l-4.52 14.016h-2.328l-2.144-6.688a43.622 43.622 0 0 1-1.24-4.616h-.064a39.034 39.034 0 0 1-1.272 4.64l-2.264 6.664h-2.328l-4.232-14.016h2.608zM238.488 82.396l1.856 7.128c.408 1.56.8 3.008 1.048 4.456h.088c.32-1.416.8-2.92 1.248-4.424l2.28-7.16h2.144l2.176 7.008c.52 1.672.928 3.16 1.24 4.576h.096a39.915 39.915 0 0 1 1.08-4.544l2.008-7.04h2.52l-4.52 14.016h-2.328l-2.152-6.688a43.622 43.622 0 0 1-1.24-4.616h-.064a39.034 39.034 0 0 1-1.272 4.64l-2.264 6.664h-2.328l-4.232-14.016h2.616z"
        style={{
            fill: "#fff",
        }}
        />
        <path
        d="M0 423.58h82.856l31.088 31.08H0zM512 423.58h-82.856l-31.088 31.08H512z"
        style={{
            fill: "#666",
        }}
        />
        <path
        d="M425.456 322.028H86.544V201.276h338.912v120.752zm-332.912-6.032h326.912v-108.72H92.544v108.72z"
        style={{
            fill: "#e21b1b",
        }}
        />
        <path
        d="M217.184 293.06h-12.992l-1.408-45.672L180 293.06h-13.216l-2.344-62.464h12.568l.592 43.72 21.432-43.712h13.936l1.448 43.248 20.576-43.248h12.448l-30.256 62.456zM240.16 293.06l13.04-62.464h46.32l-2.176 10.4h-33.456l-2.984 14.192h32.344l-2.168 10.4h-32.344l-3.92 16.96H291.2l-2.216 10.4-48.824.112zM298.272 293.06l13.088-62.464h21.344a74.384 74.384 0 0 1 9.72.424c2.744.32 5.4 1.184 7.8 2.552a12.743 12.743 0 0 1 4.848 5.112 15.086 15.086 0 0 1 1.664 7.072c.08 3.24-.944 6.416-2.896 9.008a17.68 17.68 0 0 1-8.944 5.776 13.973 13.973 0 0 1 7.52 4.704 12.005 12.005 0 0 1 2.704 7.648 19.547 19.547 0 0 1-3.2 10.672 17.946 17.946 0 0 1-8.8 7.264 43.127 43.127 0 0 1-15.384 2.216l-29.464.016zm14.96-10.056H325.6c3.52.192 7.048-.152 10.464-1a8.872 8.872 0 0 0 4.256-3.304 8.419 8.419 0 0 0 1.6-4.856 6.566 6.566 0 0 0-2.304-5.136 11.524 11.524 0 0 0-7.672-2.024H316.64l-3.408 16.32zm5.664-27.2h9.8c3.2.136 6.392-.184 9.504-.936a8 8 0 0 0 4.344-3.064 7.956 7.956 0 0 0 1.448-4.56 5.7 5.7 0 0 0-1.36-3.92 6.837 6.837 0 0 0-3.872-2.04 51.94 51.94 0 0 0-6.784-.256h-9.968l-3.112 14.776z"
        style={{
            fill: "#fff",
        }}
        />
    </svg>
    )
    export const CodePenSvg = (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="CodePen"
            viewBox="0 0 512 512"
            {...props}
        >
            <rect width={512} height={512} fill="#111" rx="15%" />
            <g fill="none" stroke="#e6e6e6" strokeLinejoin="round" strokeWidth={33}>
            <path d="M81 198v116l175 117 175-117V198L256 81z" />
            <path d="m81 198 175 116 175-116M256 81v117" />
            <path d="m81 314 175-116 175 116M256 431V314" />
            </g>
        </svg>
        )
        export const CoffeeSvg = (props) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={800}
                height={800}
                viewBox="0 0 32 32"
                {...props}
            >
                <path d="M9.197 0 7.578 3.735H5.171v3.359h.921l.943 5.975H5.562L7.51 24.042l1.249-.015L10.015 32h11.891l.083-.531 1.172-7.443 1.188.015 1.943-10.973h-1.407l.937-5.975h1.011V3.734h-2.557L22.651-.001zm.704 1.073h12.057l1.025 2.375H8.868zm-3.666 3.73H25.76v1.228H6.235zm.604 9.333h18.183l-1.568 8.823-7.536-.079-7.511.079z" />
            </svg>
            )

        

    

        