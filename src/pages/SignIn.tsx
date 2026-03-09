import { Box, Card, CardContent, Typography } from '@mui/material';
import { SignInForm } from '../features/auth';

export default function SignIn() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
            }}
            >
            <Card sx={{ width: '100%', maxWidth: 420 }}>
                <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                    로그인
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    아이디와 비밀번호를 입력해주세요.
                </Typography>

                <SignInForm />
                </CardContent>
            </Card>
        </Box>
    );
}