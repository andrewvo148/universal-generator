import React, { useState } from 'react';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, CheckboxProps, Divider, Form, GetProp, Input, Space } from 'antd';
import { Select } from 'antd';

const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};


const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};


const options = [
  { label: 'Getter', value: 'getter' },
  { label: 'Setter', value: 'setter' },
];


const EntityPage: React.FC = () => {
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
      style={{ maxWidth: 1000 }}
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

                <Form.Item name="Data types" label="Data types" rules={[{ required: true }]}>
                  <Select
                    style={{ width: 200 }}
                    placeholder="Data types"
                    onChange={onGenderChange}
                    allowClear
                  >
                    <Select.Option value="int">int</Select.Option>
                    <Select.Option value="float">float</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'getset']}
                  rules={[{ required: true, message: 'Missing first name' }]}
                >
                  <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
                  
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

export default EntityPage;



