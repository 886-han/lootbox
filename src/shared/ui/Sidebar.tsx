import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface Props {
    index: number;
    name: string;
}

function SidebarListItem({ name }: Props) {
    return (
        <ListItem component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
}

const sideListMenu = [
    { name: '최근참여박스' },
    { name: '기록' },
];

export default function Sidebar() {
    return (
        <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
            {sideListMenu.map((item, idx) => (
                <SidebarListItem
                    key={item.name}
                    index={idx}
                    name={item.name}
                />
            ))}
        </Box>
    );
}