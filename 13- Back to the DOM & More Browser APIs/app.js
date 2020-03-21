//Creating Project Lists & Parsing Element Data
////////////////////////////////////////////////
class DOMHelper {
    static clearEventListeners(element) {
      const clonedElement = element.cloneNode(true);
      element.replaceWith(clonedElement);
      return clonedElement;
    }
    static moveElement(elementId, newDestinationSelector) {
      console.log(".... moveElement() ....");
      console.log(elementId , newDestinationSelector);
      const element = document.getElementById(elementId);
      const destinationElement = document.querySelector(newDestinationSelector);
      console.log( element , destinationElement);
      destinationElement.append(element);
    }
  }
  class Component {
    constructor(hostElementId , insertBefore = false) {
      if (hosElementId) {
        this.hosElement = document.getElementById(hostElementId);
      }else{
        this.hosElement = document.body;
      }
    }
    detach() {
      this.element.remove();
      // for older browser
      //this.element.parentElement.removeChild(this.element);
    }
    attach() {
      document.body.append(this.element);
    }
  }
  class Tooltip extends Component {
    constructor(closeNotifierFunction) {
      super();
      this.closeNotifier = closeNotifierFunction;
      this.create();
    }
    closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };
    create() {
      console.log("... The ToolTip ....");
      const tooltipElement = document.createElement("div");
      tooltipElement.className = "card";
      tooltipElement.textContent = "DUMMY";
      tooltipElement.addEventListener("click", this.closeTooltip);
      this.element = tooltipElement;
    }
  }
  /**
   * ProjectItem handle the single project
   * Active Button
   *
   */
  class ProjectItem {
    hasActiveTooltip = false;
    /** Starting with the "Switch Project" Logic */
    constructor(id, updateProjectListsFunction, type) {
      this.id = id;
      // Remove Project Item form projectList (Active) To projectList(Finished) for example
      this.updateProjectListsHandler = updateProjectListsFunction;
      // this.connectMoreInfoButton();
      this.connectSwitchButton(type);
    }
    showMoreInfoHandler() {
      if (this.hasActiveTooltip) {
        return;
      }
      const tooltip = new Tooltip(() => {
        this.hasActiveTooltip = false;
      });
      tooltip.attach();
      this.hasActiveTooltip = true;
    }
    connectMoreInfoButton() {
      console.log(".... ProjectItem@connectMoreInfoButton() .....");
      const ProjectItemElement = document.getElementById(this.id);
      const moreInfoBtn = ProjectItemElement.querySelector(
        "button:first-of-type"
      );
      moreInfoBtn.addEventListener("click",this.showMoreInfoHandler);
    }
    /**
     * switch button from active to finished
     * OR finished to active
     */
    connectSwitchButton(type) {
      console.log(".... ProjectItem@connectSwitchButton() .....");
      console.log("this.id => " , this.id);
      const ProjectItemElement = document.getElementById(this.id);
      let switchBtn = ProjectItemElement.querySelector("button:last-of-type"); //last button "finished"
      console.log('switchBtn' ,switchBtn);
      switchBtn = DOMHelper.clearEventListeners(switchBtn);
      switchBtn.textContent = type == "active" ? "Finish" : "Activate";
      // Removing Item List from Active and add it in finished Lits
      switchBtn.addEventListener(
        "click",
        this.updateProjectListsHandler.bind(null, this.id)
      );
    }
  
    update(updateProjectListsFun, type) {
      this.updateProjectListsHandler = updateProjectListsFun;
      this.connectSwitchButton(type);
    }
  }
  
  class ProjectList {
    projects = [];
    /**
     * @param {string} type active || finished
     */
    constructor(type) {
      console.log("..... ProjectList@constructor .....");
      this.type = type;
      console.log("this.type" ,this.type)
      const prjItems = document.querySelectorAll(`#${type}-projects li`);
      console.log("prjItems " ,prjItems); // 2 NodeListItem  &&  1 NodeListItem
      /** Starting with the "Switch Project" Logic */
      for (const prjItem of prjItems) {
        // prjItem.id => access the id in DOM
        //  this.switchProject => To Pass switchProjectFun To event click in ProjectItem
        this.projects.push(
          new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
        );
      }
      // show the all projects
      console.log(this.projects);
    }
    /**
     * set addProject fun in after switch project 
     * @param {*} switchHandlerFunction 
     */
    setSwitchHandlerFunction(switchHandlerFunction) {
      console.log("..... ProjectList@setSwitchHandlerFunction  ....");
      console.log("switchHandlerFunction" , switchHandlerFunction);
      this.switchHandler = switchHandlerFunction;
    }
    addProject(project) {
      console.log("..... ProjectList@addProject(project) ..... ");
      console.log("this => ", this);
      console.log("project =>", project); // Project will change status
      this.projects.push(project);
      // Move  DOM 
      DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
      project.update(this.switchProject.bind(this), this.type);
    }
    /**
     * Remove Item form status and added to new status
     * @param {*} projectId
     */
    switchProject(projectId) {
      console.log("..... ProjectList@switchProject ......");
      console.log('projectId', projectId);
      // const projectIndex = this.projects.findIndex(p => {
      //     p.id === projectId
      // });
      // this.projects.splice(projectIndex, 1);
      console.log("CallBack Function switchHandler and pass  project" ,this.projects.find(p => p.id === projectId));
      this.switchHandler(this.projects.find(p => p.id === projectId));
      this.projects = this.projects.filter(p => p.id !== projectId);
      console.log("this.projects " , this.projects);
    }
  }
  /**
   * start project here
   */
  class App {
    // static function to calling by class
    static init() {
      console.log("..... App@init ......");
      const activeProjectList = new ProjectList("active");
      console.log('activeProjectList' ,activeProjectList);
      const finishedProjectList = new ProjectList("finished");
      console.log("finishedProjectList " , finishedProjectList);
      console.log("Call  setSwitchHandlerFunction in ProjectList add Pass addProject");
      activeProjectList.setSwitchHandlerFunction(
        finishedProjectList.addProject.bind(finishedProjectList)
      );
      finishedProjectList.setSwitchHandlerFunction(
        activeProjectList.addProject.bind(activeProjectList)
      );
    }
  }
  App.init();
  