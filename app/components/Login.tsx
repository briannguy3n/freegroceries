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
        Sign Up
      </Typography>
      <Typography color="white" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" color="white" crossOrigin={undefined} />
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
        <Checkbox
          label={
            <Typography
              variant="small"
              color="white"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-white-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          crossOrigin={undefined}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-white-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default Login;
