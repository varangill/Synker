interface TabsProps {
  tabList: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs = ({ tabList, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="tabs flex justify-center mb-6">
      {tabList.map((tab) => (
        <button
          className={`h-9 flex px-4 py-2 mx-2 items-center justify-center ${
            activeTab === tab
              ? "border-b-4 border-accent-200 text-white font-bold"
              : "border-b-4 border-primary-200 text-gray-300 font-semibold"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
