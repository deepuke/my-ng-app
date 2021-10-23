import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  message: string = '';
  $subs: Subscription | undefined;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.$subs = this.messageService.receivedMessage().subscribe((d) => {
      this.message = d;
    });
  }
  ngOnDestroy(): void {
    this.$subs?.unsubscribe();
  }
}
