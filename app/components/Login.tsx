"use client";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="white">
        Login
      </Typography>
      <Typography color="white" className="mt-1 font-normal">
        Enter your details to login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Email"
            color="white"
            crossOrigin={undefined}
          />
          <Input
            type="password"
            size="lg"
            color="white"
            label="Password"
            crossOrigin={undefined}
          />
        </div>

        <Button className="mt-6" fullWidth>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
