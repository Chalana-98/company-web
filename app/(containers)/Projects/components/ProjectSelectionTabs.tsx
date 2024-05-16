'use client'

import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import TabContent from "./TabContent";
import ProjectImg1 from '../../../public/Project/projectImg1.svg'

export default function ProjectSelectionTabs() {
  const [selected, setSelected] = React.useState<string | number>("login");
  
  return (
    <div className="flex flex-col max-w-screen-xl my-5">
      <Card className=" max-w-screen-xl  text-[#EBEBEB]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="lg"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg "
            color="primary"
            variant="solid"
          >
            <Tab key="login" title="Web & Mobile Design">
              <TabContent 
                group={[
                  { title: "test", description: "test", path: ProjectImg1, readMoreLink: "bbb" },{title: "test22", description: "test111", path: ProjectImg1, readMoreLink: "bbb" },{title: "test2", description: "test111", path: ProjectImg1, readMoreLink: "bbb" }
                ]}
              />
            </Tab>
            <Tab key="sign-up" title="Web & Mobile Development">
              <div>hello</div>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
