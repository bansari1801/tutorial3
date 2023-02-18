import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import './styles.css';


const Register = () => {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);

    navigate("/profile",{state:values})
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <div className='registerForm'>
      <h1>Registration</h1>
      <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
              {
                pattern:new RegExp(/^[A-Za-z]+$/),
                message:'Only letters are acceptable!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
              {
                pattern:new RegExp(/^[A-Za-z]+$/),
                message:'Only letters are acceptable!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'The email is not in proper format!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min:8,
                message:'Password should be minimum of length 8!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="cpassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className='submitBtn'
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>
    </div>
   
  )
}

export default Register