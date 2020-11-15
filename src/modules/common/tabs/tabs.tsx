import React from "react";

type TabRenderFunc = (data: any) => JSX.Element;

export interface Tab {
  label: string | JSX.Element | TabRenderFunc;
  id: string;
  content: JSX.Element;
}

interface TabsProps {
  items: Tab[];
}

interface TabsState {
  
}

export default class Tabs extends React.Component<TabsProps, TabsState> {
  constructor (props: TabsProps) {
    super(props);

    this.state = {

    }
  }

  render () {
    return <div/>
  }
}