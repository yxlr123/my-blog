import {
    Card,
    CardContent,
} from "@/components/ui/card"
import * as React from "react";
import avator from "@/assets/images/avator.png";

import * as icons from "@/icons/link"

export function LiftSidebar() {
    return (
        <div className="flex flex-col max-md:w-full md:pr-4 max-md:pt-4 md:w-[26%]">
            <Card className="rounded-lg">
                <CardContent className="flex flex-col pt-4">
                    <img src={avator} alt="头像" className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <div className="text-center">
                        <p className="font-bold text-xl">幽香乐容</p>
                        <p className="m-4 dark:text-gray-400">与其抱怨，不如改变</p>
                        <div className="flex flex-row space-x-2 justify-center">
                            <a href="">
                                <icons.Github />
                            </a>
                            <a href="#">
                                <icons.QQ />
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}