import React from 'react';
import { Form, Input, InputNumber, Typography } from 'antd';

const UseWatch: React.FC = () => {
  const [form] = Form.useForm<{ name: string; age: number}>();
  const nameValue = Form.useWatch('name', form);

  return (
    <>
      <Typography.Title level={2}>字段监听 Hooks</Typography.Title>
      <Typography.Paragraph>
        <code>useWatch</code> 允许你监听字段变化，同时仅当字段变化时重新渲染。
      </Typography.Paragraph>
      <Typography.Paragraph>
        <code>useWatch</code> 用于直接获取 form 中字段对应的值。通过该 Hooks 可以与诸如 <code>useRequest</code> 进行联动从而降低维护成本。
      </Typography.Paragraph>
      <Form form={form} layout='vertical' autoComplete='off'>
        <Form.Item name="name" label="Name (Watch to trigger rerender)">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age (Not Watch)">
          <InputNumber />
        </Form.Item>
      </Form>
      <Typography>
        <pre>Name Value: {nameValue}</pre>
      </Typography>
    </>
  )
}

export default UseWatch;