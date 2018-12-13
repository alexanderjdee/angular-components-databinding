import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //Custom events that pass the event out of the component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  //newServerName = '';
  // newServerContent = '';

  //Access to local reference using View Child decorator
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  //Lifecycle hook
  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // //2 way data binding
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});

    // Local reference, and view child
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //2 way data binding
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});

    // Local reference, and view child
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
