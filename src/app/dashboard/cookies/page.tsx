import { TabBar } from "@/components";
import { cookies } from 'next/headers';
import { HeaderBar } from "@/components/header/HeaderBar"


export const metadata = {
 title: 'Cookies Page',
 description: 'Cookies Page',
};

export default function CookiesPage() {

  const cookieStore = cookies();
  const cookieTab = Number(cookieStore.get('selected-tab')?.value ?? '1')

  return (
    <div>
      <HeaderBar 
        title='Cookies'
        subTitle='Using Cookies'
        description='This is the description'
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col ml-5">
          <span className="text-3xl">Tabs</span>
          <TabBar currentTab={cookieTab} />
        </div>
      </div>
    </div>
  );
}