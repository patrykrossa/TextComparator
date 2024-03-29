import { Icon } from "@chakra-ui/react"

export const UploadIcon = ({color}: {color: string}) => {
    return (
    <Icon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V8L14 6M12 8L10 6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 12V7.99999C5 5.98999 5 4.32999 8 4.03999M19 12V7.99999C19 5.98999 19 4.32999 16 4.03999M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13.8996 13.9783 13.561 14.216 13.1853 14.3785C12.8095 14.541 12.4044 14.6248 11.995 14.6248C11.5856 14.6248 11.1805 14.541 10.8047 14.3785C10.429 14.216 10.0904 13.9783 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </Icon>
    )
}