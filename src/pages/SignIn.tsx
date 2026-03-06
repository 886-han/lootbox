import { Box, Button, Card, CardContent, Link, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function SignIn() {
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const loginData = {id: userId, password: password};
        
        console.log(loginData);
    }


    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f5f7fb',
                px: 2,
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 420,
                    borderRadius: 4,
                    boxShadow: 3,
                }}
            >
                <CardContent sx={{ p: 4 }}>
                <Stack spacing={3}>
                    <Box>
                        <Typography variant="h4" fontWeight={700}>
                            LootBox
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            함께 구매하고, 랜덤하게 당첨되는 공동 구매 플랫폼
                        </Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField
                                label="아이디"
                                type="id"
                                fullWidth
                                onChange={(e) => setUserId(e.target.value)}
                                value={userId}
                            />
                            <TextField
                                label="비밀번호"
                                type="password"
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </Stack>

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{ py: 1.4, borderRadius: 2 }}
                        >
                        로그인
                        </Button>
                    </form>
                    <Box display="flex" justifyContent="space-between">
                    <Link href="#" underline="hover" variant="body2">
                        회원가입
                    </Link>
                    <Link href="#" underline="hover" variant="body2">
                        비밀번호 찾기
                    </Link>
                    </Box>
                </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}