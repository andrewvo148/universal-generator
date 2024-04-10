import React from 'react';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { Select } from 'antd';

const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};

const Entity: React.FC = () => {
    const [form] = Form.useForm();


    const onGenderChange = (value: string) => {
        switch (value) {
          case 'male':
            form.setFieldsValue({ note: 'Hi, man!' });
            break;
          case 'female':
            form.setFieldsValue({ note: 'Hi, lady!' });
            break;
          case 'other':
            form.setFieldsValue({ note: 'Hi there!' });
            break;
          default:
        }
      };
    return (
        <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="Field name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="Data types" />
                  </Form.Item>

                  <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Data types"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
}

export default Entity;



